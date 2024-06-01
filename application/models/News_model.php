<?php
class News_model extends CI_Model {
        protected $table = 'news';
        public function __construct(){
            parent::__construct();
        }

        public function newsContent($limit, $start)
        {
                $output = '';
                $this->db->limit($limit, $start);
                $this->db->order_by("id", "ASC");
                $query = $this->db->get($this->table);
                $output .='<div class="row align-self-center gy-4">';                
                if ($query->num_rows() > 0) {
                        $content= $query->result();
                        $i= 1;
                        foreach ($content as $news)
                        {
                        $output .='<div class="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div>
                                      <h4>'.$news->heading.'</h4>
                                      <p>'.$news->paragraph.'</p>
                                      <a href="'.$news->link.'">Read more <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                  </div>';
                                $i++;
                        }               
                } else {
                        $output .='<div class="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="200"><strong class="text-center"  >No News currently available</strong></div>';             
                } 
                $output .='</div>';
                return $output;                
            
        }
        
        public function get_count()
        {
            return $this->db->count_all($this->table);
        }
        
        //inserting news to news table
        public function insert_news($news){
                //$insert_data= array( "heading"=>$heading, "paragraph"=>$paragraph, "link"=>$link);
                $this->db->where($news);
                $this->db->limit(1);
                $query = $this->db->get($this->table);
                if ($query->num_rows() == 1){

                }else{
                    $this->db->insert($this->table, $news);
                }
                

        }
}