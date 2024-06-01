<?php
class Newsletter_model extends CI_Model {

        public function confirm_email_exist($email)
        {
                $this->db->where('email',$email);
                $this->db->limit(1);
                $query = $this->db->get('newsletter');
                if ($query->num_rows() == 1){
                    return true;
                }else{
                    return false;
                }
        }
        
        //saving email record to database livestock247 of table newsletter
        public function insert_user( $email )
        {
                $insert_data= array( "email"=>$email);
                $this->db->insert('newsletter', $insert_data);
                return true;
        }
        //saving contact details to livestock247 of table contact_us
        public function insert_contact_us($firstname, $lastname, $email, $phone_number, $subject, $message, $date){
        
                $insert_data= array( "firstname"=>$firstname, "lastname"=>$lastname, "email"=>$email, "phone_number"=>$phone_number, "subject"=>$subject, "message"=>$message, "date_time"=>$date);
                $this->db->insert('contact_us', $insert_data);
                return true;
        }          
}