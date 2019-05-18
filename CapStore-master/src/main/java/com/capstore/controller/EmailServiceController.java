package com.capstore.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstore.model.Customer;
import com.capstore.model.Email;
import com.capstore.service.IEmailService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class EmailServiceController {

	@Autowired
	private IEmailService emailService;

	@PostMapping("/emailService")
	public ResponseEntity<Boolean>  sendEmailToCustomer(@RequestBody Email email){
		
		//Get customer list
		List<Customer> customerList=emailService.getCustomerList();
		//SEND TO MULTIPLE CUSTOMERS	
		for(Customer cust:customerList) {
			email.setReceiverEmailId(cust.getEmailId());
			emailService.sendEmailToCustomer(email);
		}
		return new ResponseEntity<>(true,HttpStatus.OK);
  
	}

}