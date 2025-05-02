package com.crm.controller.auth;

import java.io.IOException;

import com.crm.model.Admin;
import com.crm.model.Client;
import com.crm.model.Commercial;
import com.crm.model.User;
import com.crm.repository.AdminRepository;
import com.crm.repository.ClientRepository;
import com.crm.repository.CommercialRepository;
import com.crm.repository.UserRepository;
import com.crm.token.Token;
import com.crm.token.TokenRepository;
import com.crm.token.TokenType;
import com.crm.utils.JwtService;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository ;
    private final PasswordEncoder passwordEncoder ;
    private final JwtService jwtService ;
    private final AuthenticationManager authenticationManager ;
    private final TokenRepository tokenRepository ;
    private final AdminRepository adminRepository ;
    private final ClientRepository clientRepository ;
    private final CommercialRepository commercialRepository ;

    public AuthenticationResponse authenticate(AuthenticationRequest request ) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokedAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .id(user.getId())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .role(user.getRole())
                .sexe(user.getSexe())
                .build();

    }


    public static String jwtGenerated;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .sexe(request.getSexe())
                .status(request.getStatus())
                .build();
        var savedUSer= repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        jwtGenerated =jwtToken ;
        saveUserToken(savedUSer, jwtToken);
        saveUserWithRole(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .id(savedUSer.getId())
                .firstname(savedUSer.getFirstname())
                .lastname(savedUSer.getLastname())
                .email(savedUSer.getEmail())
                .role(savedUSer.getRole())
                .sexe(savedUSer.getSexe())
                .build();
    }

    private void saveUserWithRole(User user) {
        switch (user.getRole().toString()) {
            case "Admin":
                saveUserAdmin(user);
                break;
            case "Client":
                saveUserClient(user);
                break;
            case "Commercial":
                saveUserCommercial(user);
                break;

            default:
                // Gestion par défaut si le rôle n'est pas reconnu
                throw new IllegalArgumentException("Rôle non pris en charge : " + user.getRole().toString());
        }
    }
    private void saveUserAdmin(User user) {
        var admin = Admin.builder()
                .user(user)
                .build();
        adminRepository.save(admin);
    }

    private void saveUserClient(User user) {
        var client = Client.builder()
                .user(user)
                .build();
        clientRepository.save(client);
    }

    private void saveUserCommercial(User user) {
        var commercial = Commercial.builder()
                .user(user)
                .build();
        commercialRepository.save(commercial);
    }

    private void revokedAllUserTokens(User user) {
        var validUserTokens =tokenRepository.findAllValidTokensByUser(user.getId());
        if(validUserTokens.isEmpty()) {
            return ;
        }

        validUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);

        });
        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }




}
