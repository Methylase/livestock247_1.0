<main id="main">
	<section id="values" class="values">
	</section>
	<section id="values" class="values">
	</section>

<div class="container">
	<header class="section-header">
		<h2>Sales</h2>
		<p>Livestock Sales Report</p>
	</header>
<div class="row">
	<div class="col-md-1">
	</div>
	<!-- sales form-->
<div class="col-md-10">

					<table class="table table-striped"  id="dataTable" >
						<thead class="thead-light">
						<tr class="small">

							<th >
								Date
							</th>
							<th>
								Seller's Name
							</th>
							<th>Cattle Type</th>
							<th>Size</th>
							<th>Weight</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Buyer</th>
						
						</tr>
						</thead>

						<?php
						//foreach ($h->result() as $row)
						{

						?>
						<tbody>
						<?php
						foreach ($s->result() as $row) {

							?>
							<tr>
								<td class="small"><?php echo $row->date;?></td>
								<td class="small"><?php echo $row->merchant;?></td>
								<td class="small"><?php echo $row->cattle_type;?></td>
								<td class="small"><?php echo $row->cattle_size;?></td>
									<td class="small"><?php echo $row->cattle_weight;?></td>
										<td class="small"><?php echo $row->quantity;?></td>
										<td class="small"><?php echo $row->price;?></td>
											<td class="small"><?php echo $row->buyer;?></td>
								
							</tr>
						<?php }
						?>
						</tbody>
					</table>
				</div><!-- /.col -->

			</div>  <!-- /.row -->
			<?php }
			?>

</div>

<div class="col-md-1">
	</div>

</div>	<!-- sales row-->
</div>	<!-- sales container-->
</main>

<script>
	// Call the dataTables jQuery plugin
	$(document).ready(function() {
		$('#dataTable').DataTable( {
			responsive: true,

			dom: "<'row'<'col-sm-3'l><'col-sm-5 text-center'B><'col-sm-4'f>>" +
					"<'row'<'col-sm-12'tr>>" +
					"<'row'<'col-sm-5'i><'col-sm-7'p>>",
			// dom: 'Bfrtip',
			buttons: [
				'copyHtml5',
				'excelHtml5',
				'csvHtml5',
				'pdfHtml5',
			],



			aLengthMenu: [
				[10, 25, 50, 100, -1],
				[10, 25, 50, 100, "All"]
			],
			iDisplayLength: 10,
			"order": [[0, "desc"]],

			"language": {
				"lengthMenu": "_MENU_ records per page",
			}


		});
	});


</script>
