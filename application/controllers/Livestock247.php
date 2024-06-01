<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Livestock247 extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
    public function __construct()
    {      
        parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('session');
		$this->load->database();
        $this->load->model('sales_model');        
        $this->load->model('news_model');
        $this->load->library('pagination');
        include APPPATH . 'third_party/phpqrcode/qrlib.php';
    }
    public function index()
	{
        $content = array( array('heading'=>'Meat247 Technology Improving The Red Meat Value Chain – Tech Cabal',
                            'paragraph'=>'It is common knowledge now that the red meat value chain in Nigeria needs total over-hauling. From animal production, transportation, processing and storage, to distribtuion and consumption.',
                            'link'=>'https://livestock247.com/blog/2021/05/20/meat247-technology-improving-the-red-meat-value-chain/'),
                          array('heading'=>'Bring Banking Service To Rural Livestock Market',
                            'paragraph'=>'When we launched Livestock247.com (Nigeria’s 1st Online Livestock Platform) in 2018, we knew that technology had a role to play in solving the many challenges in the ecosystem. One that stood out was the issue of cash transactions',
                            'link'=>'https://intelnews.com.ng/2021/06/10/bringing-banking-services-to-rural-livestock-markets-ibrahim-maigari-ahmadu/'),
                        array('heading'=>'Livestock Mainstreaming Will Solve Farmers, Herders Clash – Data Analyst',
                            'paragraph'=>'A Data analyst and agropreneur, has advocated for the mainstreaming of livestock farming as the solution to the perennial farmers and herders clash which has claimed human lives, livestock, farms and properties.',
                            'link'=>'https://businessday.ng/enterpreneur/article/meet-nigerian-entrepreneur-revolutionising-livestock-industry/'),
                          array('heading'=>'USAID/Mercy Corps partner Livestock247.com',
                            'paragraph'=>'USAID-funded Feed the Future Nigeria Rural Resilience activity, through Mercy Corps Nigeria, has signed partnership agreement with Livestock247.com and 13 other private sectors and civil society organisations to facilitate the recovery of Northeast Nigeria business environment.',
                            'link'=>'https://abiodunborisade.com/usaid-mercy-corps-partners-livestock247-com/')
                      );
        $news = array();
        foreach($content as $key => $news_content){
            foreach($news_content as $key =>$value){
             $news[$key] = $news_content[$key];           
            }
            $this->news_model->insert_news($news);
        }

                        
        if($this->input->server('REQUEST_METHOD') === 'POST'){
            $this->form_validation->set_rules('subscriberEmail', 'email', 'trim|required|valid_email|callback_checkEmail');
            $this->form_validation->set_error_delimiters('<div class="text-danger">', '</div>');
            if ($this->form_validation->run() == FALSE){
                $this->load->view('includes/head');
                $this->load->view('includes/header');
                $this->load->view('includes/slider');
                $this->load->view('index.php' );
                $this->load->view('includes/footer');
            }else{
               $email=$this->input->post('subscriberEmail');
                if($this->Newsletter_model->insert_user($email)){
                    $ci = get_instance();
                    $ci->load->library('email');
                    $config = array('protocol' => 'smtp',
                        'smtp_host' => 'ssl://smtp.gmail.com',
                         'smtp_port' => '465', // 465 587
                         'smtp_user' => 'admin@livestock247.com',
                         'smtp_pass' => '',
                         'mailtype' => 'html',
                         'charset' => 'iso-8859-1',                      
                         'wordwrap' => TRUE,
                       );
                    $ci->email->initialize($config);
                    $ci->email->set_newline("\r\n");                        
                    $ci->email->from('admin@livestock247.com', 'Admin');
                    $ci->email->to($email);
                    $ci->email->subject('You Just Subscribed To Our Newsletters');
                    $mail_message='<div style="width:100%;padding-bottom:20px;">
                    <div style="width:100%;background-color:#F8F8F8;padding:10px;height:150px;display:flex;justify-content:space-around">
                        <div ><img src="https://livestock247.com/assets/images/cow-logo.png" width="45px" height="45px"></div>
                        <div style="width:100%;margin:30px">
                        <h1 style="color:#2078BF">Welcome To Livestock247</h1>
                        <h5 style="color:grey;font-size:bold;">Nigeria\'s first online livestock platform</h5>
                        </div>
                    </div>
                    <div style="margin-top:20px;width:100%">
                    <p style="padding-left:10px;padding-top:20px"><strong>Dear '.$email.',</strong></p>
                   <p style="padding-left:10px;">Thank you for subscribing to our newsletter.</p>';
                    $mail_message .='<p style="padding-bottom:20px;padding-left:10px">We will always update you with our latest product and services.</p>
                    </div>
                    </div>';
                    $ci->email->message($mail_message);
                    if($ci->email->send()){
                        $this->session->set_flashdata('message_success', '<strong>'.$email.'</strong> Thank you for subscribing to our newsletter </strong>');              
                        redirect('/');
                    }else{
                        $this->session->set_flashdata('message_danger', '<strong> Ooop!!! something went wrong, try again later </strong>');            
                        redirect('/');
                    } 
                }else{
                        $this->session->set_flashdata('message_danger', '<strong> Ooop!!! something went wrong, try again later</strong>');            
                        redirect('/');
                } 
            }            
        }else{
           // $text = "https://www.livestock247.com";
            //$path = 'assets/images/';
             //$file = $path.uniqid().".png";
           // $ecc stores error correction capability('L')
           //$ecc = 'L';
           //$pixel_Size = 10;
           //$frame_Size = 10;
           
           // Generates QR Code and Stores it in directory given
          // QRcode::png($text, $file, $ecc, $pixel_Size, $frame_Size);     
           
            $this->load->view('includes/head');
            $this->load->view('includes/header');
            $this->load->view('includes/slider');
            $this->load->view('index.php');
            $this->load->view('includes/footer');            
        }

    }
    public function newsContent(){
        $config = array();  $page = ($this->uri->segment(2)) ? ($this->uri->segment(2) -1) : 0;
        $config['base_url'] ='#'; 
        $config['total_rows'] = $this->news_model->get_count();
        $config['per_page'] = 3;
        $config['uri_segment'] = 2;
        $config['reuse_query_string'] = true;
        $config['use_page_numbers'] = true;
        $config['full_tag_open'] = '<ul class="pagination">';
        $config['full_tag_close'] = '</ul>';
        $config['first_tag_open'] = '<li class="btn-pag">';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="btn-pag">';
        $config['last_tag_close'] = '</li>';
        $config['next_link'] = 'Next';
        $config['next_tag_open'] = '<li class="btn-pag">';
        $config['next_tag_close'] = '</li>';
        $config['prev_link'] = 'Previous';
        $config['prev_tag_open'] = '<li class="btn-pag">';
        $config['prev_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="btn-pag"><a href="#" class="active_me">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li  class="btn-pag">';
        $config['num_tag_close'] = '</li>';
        $config['num_links'] = 1;
        $this->pagination->initialize($config);
        $output = array('pagination_links' => $this->pagination->create_links(),
                         'newsContent' =>  $this->news_model->newsContent($config['per_page'], $page)
                        );
        echo json_encode($output);   
    }
    public function checkEmail($email) {
        if($this->Newsletter_model->confirm_email_exist($email)){
            $this->form_validation->set_message(
                'checkEmail', 'You have already subscribe to our newsletter'
            );    
            return false;
        } else {
            return true;
        
        }
    }    
	public function aboutUs(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('about_us.php');
		$this->load->view('includes/footer');
	}

	public function Career(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('career.php');
		$this->load->view('includes/footer');

	}
    
    public function market(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
//		$this->load->view('market.php');
		$this->load->view('includes/footer');
	}


        public function sales(){

            $this->load->view('includes/head');
            $this->load->view('includes/header');
            $this->load->helper('form');
            $this->load->helper('url');
            //load registration view form
            //load Model
            $this->load->database();
            $this->load->library('session');
    
            $this->load->library('form_validation');
            $this->form_validation->set_rules('merchant', 'Enter the name of the Seller', 'required');
            $this->form_validation->set_rules('cattle_type', 'Enter the type of cattle', 'required');
               $this->form_validation->set_rules('cattle_size', 'Enter the Size of Cattle', 'required');
                $this->form_validation->set_rules('price', 'Enter the Purchased Price', 'required');
                 $this->form_validation->set_rules('buyer', 'The Name of Buyer Sold To', 'required');
            if ($this->form_validation->run() == FALSE) {
                       $this->load->view('sales.php');
            } else {
                //load Model
                $this->load->model('sales_model');
                $merchant = $this->input->post('merchant');
                $cattle_type = $this->input->post('cattle_type');
                $cattle_size = $this->input->post('cattle_size');
                $cattle_weight = $this->input->post('cattle_weight');
                $quantity = $this->input->post('quantity');
                $price = $this->input->post('price');
                $buyer = $this->input->post('buyer');
                $feedback = $this->input->post('feedback');
                $this->db->query("
                    INSERT INTO livestock_sales(merchant,cattle_type, cattle_size, cattle_weight, quantity, price, buyer, feedback) 
                    VALUES ('$merchant','$cattle_type', '$cattle_size', '$cattle_weight', '$quantity', '$price', '$buyer', '$feedback')"
                );
                $this->session->set_flashdata('sales', 'Successful');
                     $this->load->view('sales.php');
                $this->load->view('includes/footer');
                $this->output->set_header('refresh:5;'.site_url());
    
            }
    

    }
public function livestock_sales_report(){
    $this->load->view('includes/head');
    $this->load->view('includes/header');
    $this->load->model('Sales_model');
    $this->load->database();
    //load Model
    //load helper
    $this->load->helper('url');
    $this->load->helper('date');
    //load library
    $this->load->library('pagination');
    $this->load->library('table');
    $this->load->library('calendar');

    $data['s'] = $this->Sales_model->sales_report();
    $this->load->view('livestock_sales_report.php', $data);

        //$this->load->view('includes/footer');
    }
    public function sales_report_pagination(){
        $config = array();  
        $page = ($this->uri->segment(2)) ? ($this->uri->segment(2) -1) : 0;
        $config['base_url'] =base_url().'livestock_sales_report'; 
        $config['total_rows'] = $this->sales_model->get_count();
        $config['per_page'] = 10;
        $config['reuse_query_string'] = true;
        $config['use_page_numbers'] = true;
        $config['full_tag_open'] = '<ul class="pagination">';
        $config['full_tag_close'] = '</ul>';
        $config['first_tag_open'] = '<li class="btn-pag">';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="btn-pag">';
        $config['last_tag_close'] = '</li>';
        $config['next_link'] = 'Next';
        $config['next_tag_open'] = '<li class="btn-pag">';
        $config['next_tag_close'] = '</li>';
        $config['prev_link'] = 'Previous';
        $config['prev_tag_open'] = '<li class="btn-pag">';
        $config['prev_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="btn-pag"><a href="#" class="active_me">';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li  class="btn-pag">';
        $config['num_tag_close'] = '</li>';
        $config['num_links'] = 1;
        $this->pagination->initialize($config);
        $output = array('report_pagination_links' => $this->pagination->create_links(),
                         'salesReport' =>  $this->sales_model->sales_report($config['per_page'], $page)
                        );
        echo json_encode($output);   
    }    
	public function Contact(){
        if($this->input->server('REQUEST_METHOD') === 'POST'){
            $this->form_validation->set_rules('firstname', 'firstname', 'trim|required');
            $this->form_validation->set_rules('lastname', 'lastname', 'trim|required');             
            $this->form_validation->set_rules('email', 'email', 'trim|required');
            $this->form_validation->set_rules('phone_number', 'phone number', 'trim|required|regex_match[/^[0-9]{11}$/]');
            $this->form_validation->set_rules('subject', 'subject', 'trim|required');
            $this->form_validation->set_rules('message', 'message', 'trim|required');            
            $this->form_validation->set_error_delimiters('<div class="text-danger">', '</div>');
            if ($this->form_validation->run() == FALSE){
                $this->load->view('includes/head');
                $this->load->view('includes/header');
                $this->load->view('contact.php');
                $this->load->view('includes/footer');
            }else{
                $firstname=$this->input->post('firstname');
                $lastname=$this->input->post('lastname');
                $email=$this->input->post('email');
                $phone_number=$this->input->post('phone_number');
                $subject=$this->input->post('subject');
                $message=$this->input->post('message');
                $date = date("Y-m-d H:i:sa");
                
                if($this->Newsletter_model->insert_contact_us($firstname, $lastname, $email, $phone_number, $subject, $message, $date)){
                    $ci = get_instance();
                    $ci->load->library('email');
                    $config = array('protocol' => 'smtp',
                        'smtp_host' => 'ssl://smtp.gmail.com',
                         'smtp_port' => '465', // 465 587
                         'smtp_user' => 'admin@livestock247.com',
                         'smtp_pass' => 'b861N8cPchr3',
                         'mailtype' => 'html',
                         'charset' => 'iso-8859-1',                      
                         'wordwrap' => TRUE,
                       );
                    $ci->email->initialize($config);
                    $ci->email->set_newline("\r\n");                        
                    $ci->email->from('admin@livestock247.com', 'Admin');
                    $ci->email->to('support@livestock247.com');
                    $ci->email->subject(ucwords($subject));
                    $mail_message='<div style="width:100%;padding-bottom:20px;">
                    <div style="width:100%;background-color:#F8F8F8;padding:10px;height:150px;display:flex;justify-content:space-around">
                        <div ><img src="https://livestock247.com/assets/images/cow-logo.png" width="45px" height="45px"></div>
                        <div style="width:100%;margin:30px">
                        <h1 style="color:#2078BF">Welcome To Livestock247</h1>
                        <h5 style="color:grey;font-size:bold;">Nigeria\'s first online livestock platform</h5>
                        </div>
                    </div>
                    <div style="margin-top:20px;width:100%">
                    <p>Hello, I am '.ucfirst($firstname).' '.ucfirst($lastname).' with email '.$email.' and phone number '.$phone_number.'</p>
                    <p>Kindly look into my message below and get back to me as soon as possible</p>
                    <p style="padding-top:20px">'.ucfirst($message).'</p>
                   
                    </div>
                    </div>';
                    $ci->email->message($mail_message);
                    if($ci->email->send()){
                        $this->session->set_flashdata('message_success', '<strong>'.$email.',</strong> thank you for contacting us, we will definately get back as soon as possible </strong>');              
                        redirect('contact');
                    }else{
                        $this->session->set_flashdata('message_danger', '<strong> Ooop!!! something went wrong, try again later </strong>');            
                        redirect('contact');
                    } 
                }else{
                        $this->session->set_flashdata('message_danger', '<strong> Ooop!!! something went wrong, try again later </strong>');            
                        redirect('contact');
                } 
            }            
        }else{
            $this->load->view('includes/head');
            $this->load->view('includes/header');
            $this->load->view('contact.php');
            $this->load->view('includes/footer');            
        }        
	}


	public function privacyPolicy(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('privacy.php');
		$this->load->view('includes/footer');

	}
	public function termsAndCondition(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('terms_and_condition.php');
		$this->load->view('includes/footer');

	}     
	public function Faq(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('faq.php');
		$this->load->view('includes/footer');

	}
	public function siteMap(){
		$this->load->view('includes/head');
		$this->load->view('includes/header');
		$this->load->view('site_map.php');
		$this->load->view('includes/footer');
	}    
}   
