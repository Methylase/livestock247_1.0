<!-- ======= Header ======= -->
<header id="header" class="header fixed-top">
	<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
		<a href="<?php echo site_url();?>" class="logo d-flex align-items-center">
			<img src="<?php echo base_url('assets/images/cow-logo.png') ?>"  alt="">
		</a>
		<nav id="navbar" class="navbar">
			<ul>
				<li><a class="nav-link scrollto active" href="<?php echo site_url();?>">Home</a></li>
				<li class="dropdown"><a href=""><span>Meat247</span> <i class="bi bi-chevron-down"></i></a>
					<ul>
						<li><a href="https://livestock247.com/meat247">Buy Meat</a></li>
						<li><a href="https://livestock247.com/sales_agent">Be A Sales Agent</a></li>
					</ul>
				</li>
				<li><a class="nav-link scrollto" href="https://livestock247.com/clinic">Clinic</a></li>
				<li><a class="nav-link scrollto" href="https://livestock247.com/xpress">LivestockXpress</a></li>
				<!--<li><a class="nav-link scrollto" href="https://livestock247.com/hoina">Hoina</a></li>-->
				<li><a class="nav-link scrollto" href="https://livestock247.com/livestalk">LivesTalk</a></li>
				<li>
					<form class="form-inline" action="" method="" target="_blank" id="lnk">
						<div class="input-group">
							<input type="text"   name="userInput" id="userInput"  title="Trace livestock with your animal ID" placeholder=" Trace Livestock" >
							<div class="input-group-append">
								<button  class="get_started" type="submit" aria-hidden="true"  onclick="track()"  >
									Search
									<i class="bi bi-search"></i>
								</button>
							</div>
						</div>
					</form>
				</li>
			</ul>
			<i class="bi bi-list mobile-nav-toggle"></i>
		</nav><!-- .navbar -->

	</div>
</header><!-- End Header -->
