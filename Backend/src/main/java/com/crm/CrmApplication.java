package com.crm;

import com.crm.model.Role;
import com.crm.model.User;
import com.crm.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class CrmApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrmApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(
			UserRepository userRepository ,
			PasswordEncoder passwordEncoder
	) {
		return args -> {
			// save user admin
			if(!userRepository.findByEmail("Slimen@gmail.com").isPresent()){
				userRepository.save(
						User.builder()
								.email("Slimen@gmail.com")
								.firstname("Slimen")
								.lastname("Slimen")
								.password(passwordEncoder.encode("123"))
								.sexe("homme")
								.role(Role.Admin)
								.build()
				);
			}
		};
	}


}
