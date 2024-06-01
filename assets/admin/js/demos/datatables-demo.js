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
			{

				extend: 'print', customize: function ( win ) {
					$(win.document.body)
					// exportOptions: {
					//   columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					// }
				}
			}
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


// customize print dataTable
// $(document).ready(function() { $('#dataTable').DataTable( { dom: 'Bfrtip', buttons: [ { extend: 'print', customize: function ( win ) { $(win.document.body) .css( 'font-size', '10pt' ) .prepend( '<img src="http://datatables.net/media/images/logo-fade.png" style="position:absolute; top:0; left:0;" />' ); $(win.document.body).find( 'table' ) .addClass( 'compact' ) .css( 'font-size', 'inherit' ); } } ] } ); } );
