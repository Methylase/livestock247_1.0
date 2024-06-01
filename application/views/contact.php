

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.48523180474!2d3.361879050850499!3d6.586445824231062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b3d1f74f8b%3A0x3b117882ed8a4669!2sLivestock247.com!5e0!3m2!1sen!2sng!4v1555075014449!5m2!1sen!2sng"  height="450" frameborder="0" style="border:0; width:100%;" allowfullscreen></iframe>
<div class="space"></div>
 <div class="row">
    <div class="col-md-8 offset-md-2 col-sm-12">
        <?php
          if( !empty($this->session->flashdata('message_success'))){
            echo  "<div class=' alert alert-info alert-dismissable ' style='text-align:center;'>
                    <a href='#' class='close' data-dismiss='alert' aria-label='close' style='margin-right:50px'>&times</a>"
                    .$this->session->flashdata('message_success').
                  "</div>";
          }else if(!empty($this->session->flashdata('message_danger'))) {
            echo   "<div class=' alert alert-danger alert-dismissable ' style='text-align:center;'>
                    <a href='#' class='close' data-dismiss='alert' aria-label='close' style='margin-right:50px'>&times</a>"
                    .$this->session->flashdata('message_danger').
                  "</div>";                        
          }                      
        ?>     
    </div>

  </div>
<div class="container">
 <div class="row">
 
  <div class="col-md-8 offset-md-2 col-sm-12">

<h3 style="text-transform:uppercase; text-align:left;color:#003966">Make an appointment</h3>

<div style="border: solid 2px #ccc; padding: 25px; margin-bottom:20px">
    
<form  action="<?php echo site_url('/contact')?>" method="POST" id="gform">
 <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
  <div class="row">
<div class="col-md-6">

    <div class="form-group">
      <label for="firstname">Firstname <abbr title="required">*</abbr></label>
      <input type="text" class="form-control" id="firstname" name="firstname" placeholder="">
        <?php echo form_error('firstname') ?>    
    </div>


 <div class="form-group">
      <label for="email">Email <abbr title="required">*</abbr></label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Email address">
        <?php echo form_error('email') ?>    
    </div>

</div>


<div class="col-md-6"> 
   <div class="form-group">
      <label for="lastname">Lastname <abbr title="required">*</abbr></label>
      <input type="text" class="form-control" id="lastname" name="lastname" placeholder="">
        <?php echo form_error('lastname') ?>      
    </div>


   <div class="form-group">
      <label for="phone">Mobile Number</label>
      <input id="phone" name="phone_number" class="form-control" placeholder="">
        <?php echo form_error('phone_number') ?>      
    </div>
</div>
</div>

 <div class="form-group">
      <label for="subject">Subject</label>
      <input id="subject" name="subject" class="form-control" placeholder="">
        <?php echo form_error('subject') ?>      
    </div>

 <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message"  row="5" class="form-control" placeholder=""></textarea>
        <?php echo form_error('message') ?>      
    </div>
<div class="g-recaptcha" ></div>
     <div class="form-group" style="text-align:center; ">
  <button type="submit" class="btn btn-green02 "  >Send</button>
</div>
  </form>
</div>


 </div>


  <div class="col-md-2">
</div>
    

</div><!--  row  --->
</div> <!--  end container -->

<div class="space"></div>
