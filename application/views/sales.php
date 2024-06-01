<main id="main">
	<section id="values" class="values">
	</section>
	<section id="values" class="values">
	</section>

<div class="container">
	<header class="section-header">

		<h2>Livestock Sales</h2>
		<p>Sales Facilitated</p>
	</header>
	<div class="pull-right">
			<a href="<?php echo site_url('livestock_sales_report');?>" class="btn btn-primary" >Sales Report</a>
	</div><br>
<div class="row">
	<div class="col-md-2">
	</div>
	<!-- sales form-->
<div class="col-md-8">
	<p>
		<?php

	if($this->session->flashdata('sales')){
		?>
		<div class="alert alert-info text-center">
			<?php echo $this->session->flashdata('sales'); ?>

		</div>
		<?php
	}
	?>
	</p>
<form action="" method="post">
	<div class="form-group">
		<label>Merchant's Name</label>
		<input type="text" name="merchant" placeholder="merchant/seller/rancher" class="form-control">
		<?php echo form_error('merchant', '<div class="text-danger">', '</div>'); ?>
	</div>


<div class="form-group">
		<label>Cattle type</label>
		<input type="text" name="cattle_type" placeholder="goat/sheep/bull" class="form-control">
		<?php echo form_error('cattle_type', '<div class="text-danger">', '</div>'); ?>
	</div>

	<div class="form-group">
		<label>Select Cattle Size</label>

		<select name="cattle_size" class="form-control">
			<option value="small">Small</option>
			<option value="large">Large</option>
			<option value="medium">Medium</option>
		</select>
	</div>

	<div class="form-group">
		<label>Weight</label>
		<input type="text" name="cattle_weight" placeholder="100kg" class="form-control">
	</div>

	<div class="form-group">
		<label>Quantity</label>
		<input type="number" name="quantity" class="form-control">
	</div>

	<div class="form-group">
		<label>Puchased Price</label>
		<input type="number" name="price" class="form-control">
		<?php echo form_error('price', '<div class="text-danger">', '</div>'); ?>
	</div>

	<div class="form-group">
		<label>Buyer's Name</label>
		<input type="text" name="buyer" placeholder="buyer/resturant/eatry/hotel" class="form-control">
		<?php echo form_error('buyer', '<div class="text-danger">', '</div>'); ?>
	</div>
	<div class="form-group">
		<label>Customer's Feedback</label>
		<textarea type="text" name="feedback" placeholder="Write Something" class="form-control" cols="50"></textarea>
	</div>	
	<div class="form-group">
		<div class="row">
			<div class="col-md-5 offset-md-1  col-sm-5 offset-sm-1 col-xs-12">
				<input type="submit" name="submit" value="Submit" class="btn btn-primary">
			</div>
			<div class="col-md-5 offset-md-1 col-sm-5 offset-sm-1 col-xs-12">
				<input type="reset" name="reset" value="Reset" class="btn btn-info" >
			</div>
		</div>
	</div>

</form>

</div>
	<div class="col-md-2">
	</div>
</div><!--row-->
</div>
</main>
<div class="space">&nbsp;</div>
