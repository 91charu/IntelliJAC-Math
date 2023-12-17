package com.intellijac.backend_intellijac.models.data;

import com.intellijac.backend_intellijac.User;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}
