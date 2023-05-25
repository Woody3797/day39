package ibf2022.csf.day39.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class IndexController {
    
    @PostMapping
    public String postLogin() {
        
        return "cart";
    }
}
