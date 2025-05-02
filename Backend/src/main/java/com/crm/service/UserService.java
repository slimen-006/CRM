package com.crm.service;

import com.crm.model.ChangePasswordRequest;
import com.crm.model.User;

import java.security.Principal;



public interface UserService extends BaseService<User, Integer>  {

    User accepterOrRefuserAccount(Integer idUser, int etat);
    String validateToken(String token);
    void createPasswordResetTokenForUser(User user, String passwordToken);
    void saveUserVerificationToken(User theUser, String verificationToken);

    void changePassword(ChangePasswordRequest request, Principal connectedUser);
}
