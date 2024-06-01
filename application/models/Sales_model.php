<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sales_model extends CI_Model
{

	public function sales_report(){
		//$result['cname']=array();
		$this->db->select('*');
		$this->db->from('livestock_sales');
		// $this->db->where('reference', $ref);
		$query=$this->db->get();

		return $query;



	}
}
