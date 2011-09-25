// JavaScript Document
$(document).ready(function()
{
	var widthc = $(window).width();
	var heightc = $(window).height();
	var serchbox = $("#1").height();
	var serchboxc = $("#1").width();
        
		var uploadheight = (heightc/2) -(serchbox/2);
		var uploadwidth = (widthc/2) -(serchboxc/2);
		//alert(uploadheight);
		//alert(uploadwidth);
		$("#1").css({"margin-top":uploadheight,"margin-left":uploadwidth});
		$(".content").css("height",heightc);

		counted_box_bottom=0;
  		counted_box_right=0;
		counted_box_left=0;
  		counted_box_top=0;
		direction="";

                max_width=800;

                var arr_cordinates_r=new Array();
                var arr_next_round_r=new Array();
                var arr_emptybox_cordinates_r=new Array();
                use_arr_r=false;
                use_outline_r=true;
                box_placed_r=0;
                box_placed_second_r=1;
                emptybox_counter_r=0;
                var arr_counter_r=1;

                var arr_cordinates_l=new Array();
                var arr_next_round_l=new Array();
                var arr_emptybox_cordinates_l=new Array();
                use_arr_l=false;
                use_outline_l=true;
                box_placed_l=0;
                box_placed_second_l=0;
                emptybox_counter_l=0;
                var arr_counter_l=1;

                var arr_cordinates_t=new Array();
                var arr_next_round_t=new Array();
                var arr_cordinates_push_t="";
                var arr_emptybox_cordinates_t=new Array();
                use_arr_t=false;
                use_outline_t=true;
                box_placed_t=0;
                box_placed_second_t=0;
                emptybox_counter_t=0;
                var arr_counter_t=1;

                var arr_cordinates_b=new Array();
                var arr_next_round_b=new Array();
                var arr_emptybox_cordinates_b=new Array();
                use_arr_b=false;
                use_outline_b=true;
                box_placed_b=0;
                box_placed_second_b=0;
                emptybox_counter_b=0;
                var arr_counter_b=1;

               // var arr_left=[];
               // var arr_bottom=[];
               // var arr_top=[];

		var outline_top =300;
		var outline_right =300;
		var outline_bottom =300;
		var outline_left =300;

                for(var i=2; i<=20; i++)
			{
                           //alert(i);
				var left = $("#"+i).offset().left;
                        	var top = $("#"+i).offset().top;
				var Box_width =  $("#"+i).width();
				var Box_height =  $("#"+i).height();

				//alert(counted_box_height);
				//alert(Box_height);
				//alert(" Outline Top: "+outline_top+"; Outline Right: "+outline_right+"; Outline Bottom: "+outline_bottom+"; Outline Left: "+outline_left);

				//alert(counted_box_height);

				//********** Initializing the direction in which blocks to be placed****************************//
				if(direction=="")
				{
					 direction="R";
                                         //alert(outline_right);
                                         outline_right =outline_left;
                                         outline_bottom =outline_top;
                                         uploadheight = (heightc/2) -(outline_top/2);
                                         uploadwidth = (widthc/2) -(outline_left/2);
                                         counted_box_bottom=0;
                                         counted_box_right=0;
                                         counted_box_left=0;
                                         counted_box_top=0;
                                         box_placed_r=0;
                                         box_placed_b=0;
                                         box_placed_l=0;
                                         box_placed_t=0;
                                         box_placed_second_r=1;
                                         box_placed_second_b=0;
                                         box_placed_second_l=0;
                                         box_placed_second_t=0;
                                         //arr_emptybox_cordinates_r="";
                                        
                                        // alert(" Outline Top: "+outline_top+"; Outline Right: "+outline_right+"; Outline Bottom: "+outline_bottom+"; Outline Left: "+outline_left);
				}
				//********* Get the X, Y co-ordinates of the box to be placed in the direction Right*********//
				if(direction=="R")
				{
                                        top_x =uploadheight+counted_box_right;
                                        left_y=uploadwidth+outline_top;
                                      //alert("RIGHT top: "+top_x+"left: "+left_y);
				}
				//********* Get the X, Y co-ordinates of the box to be placed in the direction Bottom*********//
				else if(direction=="B")
				{
                                        top_x =uploadheight+outline_right;
					left_y=uploadwidth+outline_bottom-counted_box_bottom-Box_width;
				}
				//********* Get the X, Y co-ordinates of the box to be placed in the direction Left*********//
				else if(direction=="L")
				{
					top_x =uploadheight+outline_left-counted_box_left-Box_height;
					left_y=uploadwidth-Box_width;
				}
				//********* Get the X, Y co-ordinates of the box to be placed in the direction Top*********//
				else if(direction=="T")
				{
					top_x =uploadheight-Box_height;
					left_y=uploadwidth+counted_box_top;
				}

				//********** Placing the block on Right side untile total box's height exceeds the Out line right
                                //alert("Outline Right: "+outline_right+" Counted Box Right: "+counted_box_right);
                                //alert(use_arr_r);
                              	if((outline_right >= counted_box_right && direction=="R" && use_outline_r==true)||(use_arr_r==true && direction=="R"))
				{  //For the first round use outline's
                                   
                                    
                                    if(!use_arr_r){
                                        $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                        x=uploadheight+counted_box_right;
                                        y=uploadwidth+outline_top+Box_width;
                                        w=Box_width;
                                        h=Box_height;
                                        arr_cordinates_r[arr_counter_r]=x+"-"+y+"-"+w+"-"+h;
                                        arr_counter_r++;
                                        // second cordinate for the next round
                                        arr_element_bottom=parseFloat(counted_box_right+Box_height);
                                        if(arr_element_bottom>outline_right)
                                          {
                                                x=top_x+Box_height;
                                                y=left_y+Box_width;
                                                w=Box_width;
                                                h=Box_height;
                                                arr_cordinates_b[1]=x+"-"+y+"-"+w+"-"+h;
                                                arr_counter_b++;
                                          }
                                    }
                                    //For the other rounds using cordinates stored in array's
                                    else{  // alert(i);
                                          
                                           //alert(box_placed_r+" : "+arr_cordinates_r[box_placed_r]);
                                           arr_length=arr_cordinates_r.length;

                                             //alert("box count: " +box_placed_r +"Arra length: " +arr_length);
                                             if(box_placed_r < arr_length)
                                                 {  //alert("current orig array: "+arr_cordinates_r[box_placed_r]);
                                                      
                                                    arr_x_y =arr_cordinates_r[box_placed_r].split("-");
                                                   // alert("X: "+arr_x_y[0]);
                                                   // alert("Y: "+arr_x_y[1]);
                                                    top_x=parseFloat(arr_x_y[0]);
                                                    left_y= parseFloat(arr_x_y[1]);
                                                    width=parseFloat(arr_x_y[2]);
                                                    height=parseFloat(arr_x_y[3]);

                                                    //alert("Box Height: "+Box_height+" ArrHeight: "+height);

                                                    //If the box size is less then the size of array box height
                                                        
                                                        //alert("bOX pLACED:  second "+box_placed_second_r);
                                                     if(height>Box_height)
                                                        {//alert("one");
                                                           // alert(arr_cordinates_length_r+"bOX pLACED:="+box_placed_r);
                                                           // alert("Arr Cords Latest0: "+arr_cordinates_r.valueOf());
                                                           $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                                x=top_x;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_r[box_placed_second_r]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("Next Round Array: "+arr_next_round_r.valueOf());
                                                           //alert("Next Round: "+arr_next_round_r[box_placed_second_r]);
                                                          // alert("Arr Cords Latest1: "+arr_cordinates_r.valueOf());
                                                           box_placed_second_r++;
                                                           
                                                           original_cords=arr_cordinates_r[box_placed_r].split("-");
                                                           original_cords_x=parseFloat(original_cords[0]);
                                                           original_cords_y=parseFloat(original_cords[1]);
                                                           original_cords_w=parseFloat(original_cords[2]);
                                                           original_cords_h=parseFloat(original_cords[3]);
                                                           
                                                           x=top_x+Box_height;
                                                           y=left_y;
                                                           w=Box_width;
                                                           h=original_cords_h-Box_height;

                                                           arr_cordinates_r[box_placed_r]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("If Changed Cordinates: "+arr_cordinates_r[box_placed_r]);
                                                           //alert("If Next Cordinates: "+arr_cordinates_r[box_placed_r]);
                                                            
                                                        }
                                                       //If the box size is Greater then the size of array box height
                                                     else if(height<Box_height)
                                                        {//alert("two");
                                                            //alert("Inside Else IF");
                                                           arr_cordinates_length_r=arr_cordinates_r.length-1;
                                                            //alert("Original of Changed Cordinates: "+arr_cordinates_r[box_placed_r]);
                                                           if(arr_cordinates_length_r==box_placed_r)
                                                           {

                                                               $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});

                                                                x=top_x;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_r[box_placed_second_r]=x+"-"+y+"-"+w+"-"+h;
                                                                //alert("Next Round: "+arr_next_round_r[box_placed_second_r]);;
                                                           box_placed_second_r++;


                                                               use_arr_r=false;
                                                           }
                                                           else
                                                           {
                                                               //alert("Current Arr Cords: "+arr_cordinates_r[box_placed_r]);

                                                            curr_box_bottom_x=top_x+Box_height;
                                                            arr_next_box_height= arr_cordinates_r[box_placed_r+1].split("-");
                                                            next_box_top_x=arr_next_box_height[0];

                                                           // alert("Curr: "+curr_box_bottom_x+" Next: "+next_box_top_x);
                                                           // alert("Next: "+next_box_top_x);
                                                            if(curr_box_bottom_x>next_box_top_x)
                                                                {// alert("Inside Else IF IF");

                                                                   if(arr_emptybox_cordinates_r.length > 0) {

                                                                       arr_emptybox_cordinates_r[emptybox_counter_r]=arr_cordinates_r[box_placed_r];
                                                                       prev_empty_box=arr_emptybox_cordinates_r[emptybox_counter_r-1].split("-");
                                                                       prev_empty_box_x=parseFloat(prev_empty_box[0]);
                                                                       prev_empty_box_h=parseFloat(prev_empty_box[3]);
                                                                       prev_empty_box_add=prev_empty_box_x+prev_empty_box_h;

                                                                       curr_empty_box=arr_emptybox_cordinates_r[emptybox_counter_r].split("-");
                                                                       curr_empty_box_add=parseFloat(curr_empty_box[0]);
                                                                        //alert("Curr: "+curr_empty_box_add+" Prev: "+prev_empty_box_add);
                                                                        if(prev_empty_box_add==curr_empty_box_add)
                                                                           {//if equal then merge two arrays
                                                                           //alert("both are consecutive");
                                                                               x=prev_empty_box_x;
                                                                               y=curr_empty_box[1];
                                                                               w=curr_empty_box[2];
                                                                               h=prev_empty_box_h+parseFloat(curr_empty_box[3]);
                                                                               arr_emptybox_cordinates_r[emptybox_counter_r-1]=x+"-"+y+"-"+w+"-"+h;
                                                                               arr_cordinates_r[box_placed_r]=x+"-"+y+"-"+w+"-"+h;

                                                                             // box_placed_r--;
                                                                           }
                                                                           else{
                                                                                  arr_emptybox_cordinates_r[emptybox_counter_r]=arr_cordinates_r[box_placed_r];
                                                                                  emptybox_counter_r++;
                                                                                   box_placed_r++;
                                                                                     // alert("After saving boxCounter1: "+box_placed_r);
                                                                              }
                                                                   }else{
                                                                   arr_emptybox_cordinates_r[emptybox_counter_r]=arr_cordinates_r[box_placed_r];
                                                                   emptybox_counter_r++;
                                                                   box_placed_r++;
                                                                   // alert("After saving boxCounter2: "+box_placed_r);
                                                                }
                                                                //alert("EmptyArray: "+arr_emptybox_cordinates_r.valueOf());
                                                                 i--;//to reapeat same box
                                                               // alert("OriginalArray: "+arr_cordinates_r.valueOf());
                                                                }
                                                            // box_placed_r++;
                                                           }
                                                        }
                                                     else
                                                       {//alert("Equal boxes");
                                                           //alert("three");
                                                           //  alert(box_placed_r);
                                                            $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});

                                                                x=top_x;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_r[box_placed_second_r]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("Next Round: "+arr_next_round_r[box_placed_second_r]);;
                                                           box_placed_second_r++;

                                                             x=top_x+Box_height;
                                                             y=left_y;
                                                             w=Box_width;
                                                             h=Box_height;
                                                            // arr_cordinates_r[box_placed_r+1]=x+"-"+y+"-"+w+"-"+h;
                                                            arr_cordinates_length_r=arr_cordinates_r.length-1;
                                                            if(arr_cordinates_length_r==box_placed_r)
                                                           {
                                                                use_arr_r=false;
                                                           }
                                                           else{
                                                             box_placed_r++;
                                                           }
                                                        }

                                                 }

                                    }
				}
				else if(direction=="R")
				{use_arr_r=true;
                                        use_outline_r=false;
                                       
                                        //arr_cordinates_r=arr_next_round_r;

                                        if(arr_next_round_r.length!=0)
                                        { 
                                            //Get the starting box cordinates for bottom box placement
                                          
                                            length_arr=arr_cordinates_r.length;
                                            //alert("Current ARRAY R: "+arr_cordinates_r.valueOf());
                                        //alert("Next ARRAY R: "+ arr_next_round_r[length_arr-1]);
                                             //alert("Next ARRAY R: "+arr_next_round_r.valueOf());
                                            start_cords_for_next_rnd= arr_next_round_r[length_arr].split("-")
                                            x=parseFloat(parseFloat(start_cords_for_next_rnd[0])+parseFloat(start_cords_for_next_rnd[3]));
                                            y=parseFloat(start_cords_for_next_rnd[1]);
                                            w=parseFloat(start_cords_for_next_rnd[2]);
                                            h=parseFloat(start_cords_for_next_rnd[3]);
                                            arr_cordinates_b[0]=x+"-"+y+"-"+w+"-"+h;
                                            //alert(arr_cordinates_r.valueOf());

                                            //Last element for top
                                            last_top_cords=arr_next_round_r[1].split("-");
                                            last_top_x=parseFloat(last_top_cords[0]);
                                            last_top_y=parseFloat(parseFloat(last_top_cords[1])-parseFloat(last_top_cords[2]));
                                            last_top_w=parseFloat(last_top_cords[2]);
                                            last_top_h=parseFloat(last_top_cords[3]);
                                            last_top=last_top_x+"-"+last_top_y+"-"+last_top_w+"-"+last_top_h;
                                            arr_cordinates_t.push(last_top);
                                            //alert(arr_cordinates_t.valueOf());
                                            //arr_next_round_r=[];
                                        }
                                          //  alert("RSwapped ARRAY: "+arr_cordinates_r.valueOf());
                                            top_x =uploadheight+outline_right;
                                            left_y=uploadwidth+outline_top-Box_width;
                                            direction="B";


                                 }
                                // alert("Upload Height: "+uploadheight);
                                // alert("Upload Width: "+uploadwidth);
				//alert("Size: "+ arr_cordinates.length +", Values: "+ arr_cordinates.valueOf());
				//********** Placing the block on Bottom side untile total box's heoght exceeds the Out line right

				if((outline_bottom >= counted_box_bottom && direction=="B" && use_outline_b==true)||(use_arr_b==true && direction=="B"))
				{
                                   //For the first round use outline's
                                   //alert(i);
                                    if(!use_arr_b){
                                        $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                       // alert("X: "+top_x+" Y: "+left_y);
                                        x=top_x+Box_height;
                                        y=left_y+Box_width;
                                        w=Box_width;
                                        h=Box_height;
                                        arr_cordinates_b[arr_counter_b]=x+"-"+y+"-"+w+"-"+h;
                                        arr_counter_b++;
                                      
                                         // second cordinate for the next round
                                        arr_element_left=parseFloat(counted_box_bottom+Box_width);
                                        if(arr_element_left>outline_bottom)
                                          {  
                                                x=top_x+Box_height;
                                                y=left_y;
                                                w=Box_width;
                                                h=Box_height;
                                                arr_cordinates_l[1]=x+"-"+y+"-"+w+"-"+h;
                                                //alert("1: "+arr_cordinates_l[1]);
                                                arr_counter_l++;
                                          }
                                    }
                                    //For the other rounds using cordinates stored in array's
                                    else{
                                        //alert(i);
                                         //alert("Arr Cords: "+arr_cordinates_b.valueOf());
                                         //alert(box_placed_b+" : "+arr_cordinates_b[box_placed_b]);
                                           arr_length=arr_cordinates_b.length;

                                             //alert("box count: " +box_placed_b +"Arra length: " +arr_length);
                                             if(box_placed_b < arr_length)
                                                 {  //alert("current orig array: "+arr_cordinates_b[box_placed_b]);
                                              
                                                    arr_x_y =arr_cordinates_b[box_placed_b].split("-");
                                                   // alert("X: "+arr_x_y[0]);
                                                   // alert("Y: "+arr_x_y[1]);
                                                    top_x=parseFloat(arr_x_y[0]);
                                                    left_y=parseFloat(parseFloat(arr_x_y[1])-parseFloat(Box_width));
                                                    width=parseFloat(arr_x_y[2]);
                                                    height=parseFloat(arr_x_y[3]);

                                                    //alert("Box Height: "+Box_height+" ArrHeight: "+height);

                                                    //If the box size is less then the size of array box height
                                                    //alert(arr_cordinates_b.valueOf());

                                                     if(width>Box_width)
                                                        {   //alert("one");
                                                            //alert("If Changed Cordinates: "+arr_cordinates_b[box_placed_b]);
                                                            //alert(arr_cordinates_length_b+"="+box_placed_b);
                                                            //alert("top: "+top_x+" left: "+left_y);
                                                           $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                            //Array co-ordinates for the next round
                                                                x=top_x+Box_height;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_b[box_placed_second_b]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(box_placed_second_b+": "+arr_next_round_b[box_placed_second_b]);
                                                             box_placed_second_b++;

                                                           original_cords=arr_cordinates_b[box_placed_b].split("-");
                                                           original_cords_x=parseFloat(original_cords[0]);
                                                           original_cords_y=parseFloat(original_cords[1]);
                                                           original_cords_w=parseFloat(original_cords[2]);
                                                           original_cords_h=parseFloat(original_cords[3]);

                                                           x=original_cords_x;
                                                           y=original_cords_y-Box_width;
                                                           w=original_cords_w-Box_width;
                                                           h=Box_height;

                                                           arr_cordinates_b[box_placed_b]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("If Changed Cordinates: "+arr_cordinates_b[box_placed_b]);
                                                           //alert("If Next Cordinates: "+arr_cordinates_b[box_placed_b]);
                                                        }
                                                        else if(width<Box_width)
                                                        {   //alert(i);
                                                            //alert("Box width: "+Box_width);
                                                            //alert("Inside Else IF");
                                                           arr_cordinates_length_b=arr_cordinates_b.length-1;
                                                            //alert("Original of Changed Cordinates: "+arr_cordinates_b[box_placed_b]);
                                                            //At the place he box as it is.
                                                           if(arr_cordinates_length_b==box_placed_b)
                                                           {
                                                               $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                                //alert("top: "+top_x+" left: "+left_y);
                                                                //Array co-ordinates for the next round
                                                                x=top_x+Box_height;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_b[box_placed_second_b]=x+"-"+y+"-"+w+"-"+h;
                                                                //alert(box_placed_second_b+": "+arr_next_round_b[box_placed_second_b]);
                                                                box_placed_second_b++;
                                                                use_arr_b=false;
                                                           }
                                                           else
                                                           {
                                                            
                                                            curr_box_left_y=left_y;
                                                            arr_next_box_width= arr_cordinates_b[box_placed_b+1].split("-");
                                                            next_box_left_y=arr_next_box_width[1];

                                                           // alert("Curr: "+curr_box_left_y+" Next: "+next_box_left_y);
                                                            
                                                            if(curr_box_left_y < next_box_left_y)
                                                                {// alert("Inside Else IF IF");
                                                               // alert(arr_emptybox_cordinates_b.length);
                                                                   if(arr_emptybox_cordinates_b.length > 0) {
                                                                   // alert("Current Arr Cords: "+arr_cordinates_b[box_placed_b]);
                                                                       arr_emptybox_cordinates_b[emptybox_counter_b]=arr_cordinates_b[box_placed_b];

                                                                       prev_empty_box=arr_emptybox_cordinates_b[emptybox_counter_b-1].split("-");
                                                                       prev_empty_box_x=parseFloat(prev_empty_box[0]);
                                                                       prev_empty_box_y=parseFloat(prev_empty_box[1]);
                                                                       prev_empty_box_w=parseFloat(prev_empty_box[2]);
                                                                       prev_empty_box_add_y=prev_empty_box_y-prev_empty_box_w;
                                                                      // alert("Arr Prev Empty: "+arr_emptybox_cordinates_b[emptybox_counter_b-1]);
                                                                      // alert(prev_empty_box_y);
                                                                      // alert(prev_empty_box_w);

                                                                       curr_empty_box=arr_emptybox_cordinates_b[emptybox_counter_b].split("-");
                                                                       curr_empty_box_x=parseFloat(curr_empty_box[0]);
                                                                       curr_empty_box_add_y=parseFloat(curr_empty_box[1]);
                                                                       curr_empty_box_w=parseFloat(curr_empty_box[2]);
                                                                       curr_empty_box_h=parseFloat(curr_empty_box[3]);
                                                                        //alert("Curr Empty: "+curr_empty_box_add_y+" Prev Empty: "+prev_empty_box_add_y);
                                                                       // alert("Curr Empty x: "+curr_empty_box_x+" Prev Empty x: "+prev_empty_box_x);
                                                                        if((prev_empty_box_add_y==curr_empty_box_add_y)&&(prev_empty_box_x==curr_empty_box_x))
                                                                           {//if equal then merge two arrays
                                                                          // alert("both are consecutive");
                                                                               x=prev_empty_box_x;
                                                                               y=prev_empty_box_y;
                                                                               w=parseFloat(curr_empty_box_w+prev_empty_box_w);
                                                                               h=Math.max(prev_empty_box_h, curr_empty_box_h);
                                                                               arr_emptybox_cordinates_b[emptybox_counter_b-1]=x+"-"+y+"-"+w+"-"+h;
                                                                               arr_cordinates_b[box_placed_b]=x+"-"+y+"-"+w+"-"+h;
                                                                               //arr_emptybox_cordinates_b =[];
                                                                               //emptybox_counter_b= 0;
                                                                             // box_placed_b--;
                                                                           }
                                                                           else{
                                                                                  arr_emptybox_cordinates_b[emptybox_counter_b]=arr_cordinates_b[box_placed_b];
                                                                                  emptybox_counter_b++;
                                                                                   box_placed_b++;
                                                                                     // alert("After saving boxCounter1: "+box_placed_b);
                                                                                     // break;
                                                                              }
                                                                   }else{

                                                                   arr_emptybox_cordinates_b[emptybox_counter_b]=arr_cordinates_b[box_placed_b];
                                                                   emptybox_counter_b++;
                                                                   box_placed_b++;
                                                                   // alert("After saving boxCounter2: "+box_placed_b);
                                                                }
                                                               //alert("EmptyArray: "+arr_emptybox_cordinates_b.valueOf());
                                                                 i--;//to reapeat same box
                                                                //alert("OriginalArray: "+arr_cordinates_b.valueOf());
                                                                }
                                                            // box_placed_b++;
                                                           }
                                                        }
                                                        else
                                                       {//alert("Equal boxes");
                                                          // alert("three");
                                                           //  alert(box_placed_b);
                                                            $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                            // alert("top: "+top_x+" left: "+left_y);
                                                             //Array co-ordinates for the next round
                                                                x=top_x+Box_height;
                                                                y=left_y+Box_width;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_b[box_placed_second_b]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(box_placed_second_b+": "+arr_next_round_b[box_placed_second_b]);
                                                           box_placed_second_b++;

                                                             x=top_x+Box_height;
                                                             y=left_y;
                                                             w=Box_width;
                                                             h=Box_height;
                                                            // arr_cordinates_b[box_placed_b+1]=x+"-"+y+"-"+w+"-"+h;
                                                            arr_cordinates_length_b=arr_cordinates_b.length-1;
                                                            if(arr_cordinates_length_b==box_placed_b)
                                                           {    //alert("three4");
                                                                use_arr_b=false;
                                                           }
                                                           else{
                                                             box_placed_b++;
                                                           }
                                                        }
                                                 }
                                        }
				}
				else if(direction=="B")
				{
                                        use_arr_b=true;
                                        use_outline_b=false;
                                        //alert(arr_cordinates_b.length);
                                        //alert(arr_cordinates_b.valueOf());
                                        //arr_cordinates_b=arr_next_bound_b;
                                      

                                        if(arr_next_round_b.length!=0)
                                        {
                                            
                                            arr_cordinates_b=arr_next_round_b;
                                           //Get the starting box cordinates for bottom box placement
                                          // alert(arr_cordinates_b.valueOf());
                                           length_arr=arr_cordinates_b.length;
                                           start_cords_for_next_rnd= arr_cordinates_b[length_arr-1].split("-")
                                            x=parseFloat(start_cords_for_next_rnd[0]);
                                            y=parseFloat(parseFloat(start_cords_for_next_rnd[1])-parseFloat(start_cords_for_next_rnd[2]));
                                            w=parseFloat(start_cords_for_next_rnd[2]);
                                            h=parseFloat(start_cords_for_next_rnd[3]);
                                            arr_cordinates_l[0]=x+"-"+y+"-"+w+"-"+h;
                                           //alert("B0: "+arr_cordinates_b[length_arr-1]);
                                           // alert("0: "+arr_cordinates_l[0]);
                                        }
                                          // alert(arr_cordinates_b.valueOf());
                                        top_x=uploadheight+outline_left-Box_height;
					left_y=uploadwidth-Box_width;
					direction="L";
				}
				//********** Placing the block on Left side untile total box's heoght exceeds the Out line right
                              if((outline_left >= counted_box_left && direction=="L"  && use_outline_l==true)||(use_arr_l==true && direction=="L"))
				{   //alert(arr_cordinates_l.length);
                                    //alert(arr_cordinates_l.valueOf());
                                     if(!use_arr_l){

                                        $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                        // alert("X: "+top_x+" Y: "+left_y);
                                        x=top_x+Box_height;
                                        y=left_y;
                                        w=Box_width;
                                        h=Box_height;
                                        arr_cordinates_l[arr_counter_l]=x+"-"+y+"-"+w+"-"+h;
                                        //alert(arr_counter_l);
                                        //alert(arr_cordinates_l[arr_counter_l]);
                                        arr_counter_l++;
                                        arr_element_top=parseFloat(counted_box_left+Box_height);
                                        if(arr_element_top>outline_left)
                                          {
                                                x=top_x;
                                                y=left_y;
                                                w=Box_width;
                                                h=Box_height;
                                                arr_cordinates_t[1]=x+"-"+y+"-"+w+"-"+h;
                                                //alert("1: "+arr_cordinates_t[1])
                                                arr_counter_t++;
                                          }
                                    }
                                     //For the other rounds using cordinates stored in array's
                                    else{  // alert(i);
                                          // alert(box_placed_r+" : "+arr_cordinates_r[box_placed_r]);
                                           arr_length=arr_cordinates_l.length;

                                             //alert("box count: " +box_placed_r +"Arra length: " +arr_length);
                                             if(box_placed_l < arr_length)
                                                 {  //alert("current orig array: "+arr_cordinates_l[box_placed_l]);
                                                   //  alert("Arr Cords: "+arr_cordinates_l.valueOf());
                                                    arr_x_y =arr_cordinates_l[box_placed_l].split("-");
                                                    // alert("X: "+arr_x_y[0]);
                                                    // alert("Y: "+arr_x_y[1]);
                                                    top_x=parseFloat(parseFloat(arr_x_y[0])-Box_height);
                                                    left_y= parseFloat(parseFloat(arr_x_y[1])-Box_width);
                                                    width=parseFloat(arr_x_y[2]);
                                                    height=parseFloat(arr_x_y[3]);

                                                  //  alert("Box Height: "+Box_height+" ArrHeight: "+height);

                                                    //If the box size is less then the size of array box height
                                                    //alert(arr_cordinates_r.valueOf());
                                                    if(height>Box_height)
                                                        {   //alert("one");
                                                            //alert(arr_cordinates_length_l+"="+box_placed_l);
                                                                 $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                                // alert("X: "+top_x+" Y: "+left_y);

                                                                x=top_x+Box_height;
                                                                y=left_y;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_l[box_placed_second_l]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(arr_next_round_l[box_placed_second_l]);
                                                           box_placed_second_l++;

                                                           //modifying original array
                                                           original_cords=arr_cordinates_l[box_placed_l].split("-");
                                                           original_cords_x=parseFloat(original_cords[0]);
                                                           original_cords_y=parseFloat(original_cords[1]);
                                                           original_cords_w=parseFloat(original_cords[2]);
                                                           original_cords_h=parseFloat(original_cords[3]);

                                                           x=original_cords_x-Box_height;
                                                           y=original_cords_y;
                                                           w=Box_width;
                                                           h=original_cords_h-Box_height;

                                                           arr_cordinates_l[box_placed_l]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("If Changed Cordinates: "+arr_cordinates_r[box_placed_r]);
                                                           //alert("If Next Cordinates: "+arr_cordinates_l[box_placed_l]);
                                                        }
                                                       //If the box size is Greater then the size of array box height
                                                       else if(height<Box_height)
                                                        {  // alert("two");
                                                            //alert("Inside Else IF");
                                                           arr_cordinates_length_l=arr_cordinates_l.length-1;
                                                            //alert("Original of Changed Cordinates: "+arr_cordinates_r[box_placed_r]);
                                                           if(arr_cordinates_length_l==box_placed_l)
                                                           {
                                                               $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});

                                                               x=top_x+Box_height;
                                                               y=left_y;
                                                               w=Box_width;
                                                               h=Box_height;
                                                               arr_next_round_l[box_placed_second_l]=x+"-"+y+"-"+w+"-"+h;
                                                               //alert(arr_next_round_r[box_placed_second_r]);
                                                               box_placed_second_l++;
                                                               use_arr_l=false;
                                                           }
                                                           else
                                                           {
                                                               //alert("Current Arr Cords: "+arr_cordinates_l[box_placed_l]);
                                                            curr_box_bottom_x=top_x+Box_height;
                                                            arr_next_box_height= arr_cordinates_l[box_placed_l+1].split("-");
                                                            next_box_top_x=arr_next_box_height[0];

                                                           // alert("Curr: "+curr_box_bottom_x+" Next: "+next_box_top_x);
                                                           // alert("Next: "+next_box_top_x);
                                                            if(curr_box_bottom_x>next_box_top_x)
                                                                {// alert("Inside Else IF IF");

                                                                   if(arr_emptybox_cordinates_l.length > 0) {

                                                                       arr_emptybox_cordinates_l[emptybox_counter_l]=arr_cordinates_l[box_placed_l];
                                                                       prev_empty_box=arr_emptybox_cordinates_l[emptybox_counter_l-1].split("-");
                                                                       prev_empty_box_x=parseFloat(prev_empty_box[0]);
                                                                       prev_empty_box_h=parseFloat(prev_empty_box[3]);
                                                                       prev_empty_box_add=prev_empty_box_x-prev_empty_box_h;

                                                                       curr_empty_box=arr_emptybox_cordinates_l[emptybox_counter_l].split("-");
                                                                       curr_empty_box_add=parseFloat(curr_empty_box[0]);
                                                                        //alert("Curr: "+curr_empty_box_add+" Prev: "+prev_empty_box_add);
                                                                        if(prev_empty_box_add==curr_empty_box_add)
                                                                           {//if equal then merge two arrays
                                                                           //alert("both are consecutive");
                                                                               x=prev_empty_box_x;
                                                                               y=curr_empty_box[1];
                                                                               w=curr_empty_box[2];
                                                                               h=prev_empty_box_h+parseFloat(curr_empty_box[3]);
                                                                               arr_emptybox_cordinates_l[emptybox_counter_l-1]=x+"-"+y+"-"+w+"-"+h;
                                                                               arr_cordinates_l[box_placed_l]=x+"-"+y+"-"+w+"-"+h;

                                                                             // box_placed_l--;
                                                                           }
                                                                           else{
                                                                                  arr_emptybox_cordinates_l[emptybox_counter_l]=arr_cordinates_l[box_placed_l];
                                                                                  emptybox_counter_l++;
                                                                                  box_placed_l++;
                                                                                     // alert("After saving boxCounter1: "+box_placed_l);
                                                                              }
                                                                   }else{
                                                                   arr_emptybox_cordinates_l[emptybox_counter_l]=arr_cordinates_l[box_placed_l];
                                                                   emptybox_counter_l++;
                                                                   box_placed_l++;
                                                                    //alert("After saving boxCounter2: "+box_placed_l);
                                                                }
                                                               // alert("EmptyArray: "+arr_emptybox_cordinates_l.valueOf());
                                                                 i--;//to reapeat same box
                                                                //alert("OriginalArray: "+arr_cordinates_l.valueOf());
                                                                }
                                                            // box_placed_l++;
                                                           }
                                                        }
                                                        else
                                                       {//alert("Equal boxes");
                                                          // alert("three");
                                                           //  alert(box_placed_r);
                                                            $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});

                                                               x=top_x+Box_height;
                                                               y=left_y;
                                                               w=Box_width;
                                                               h=Box_height;
                                                               arr_next_round_l[box_placed_second_l]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(arr_next_round_l[box_placed_second_l]);
                                                           box_placed_second_l++;

                                                             x=top_x+Box_height;
                                                             y=left_y;
                                                             w=Box_width;
                                                             h=Box_height;
                                                            // arr_cordinates_l[box_placed_l+1]=x+"-"+y+"-"+w+"-"+h;
                                                            arr_cordinates_length_l=arr_cordinates_l.length-1;
                                                            if(arr_cordinates_length_l==box_placed_l)
                                                           {
                                                                use_arr_l=false;
                                                           }
                                                           else{
                                                             box_placed_l++;
                                                           }
                                                        }
                                                     }
                                    }

				}
				else if(direction=="L")
				{
                                        use_arr_l=true;
                                        use_outline_l=false;
                                        //alert(arr_cordinates_l.valueOf());
                                        //arr_cordinates_l=arr_next_round_l;
                                       

                                        if(arr_next_round_l.length!=0)
                                        {
                                          
                                            arr_cordinates_l=arr_next_round_l;
                                            //Get the starting box cordinates for Top box placement
                                            length_arr=arr_cordinates_l.length;

                                             start_cords_for_next_rnd= arr_cordinates_l[length_arr-1].split("-")
                                            x=parseFloat(parseFloat(start_cords_for_next_rnd[0])-parseFloat(start_cords_for_next_rnd[3]));
                                            y=parseFloat(start_cords_for_next_rnd[1]);
                                            w=parseFloat(start_cords_for_next_rnd[2]);
                                            h=parseFloat(start_cords_for_next_rnd[3]);
                                            arr_cordinates_t[0]=x+"-"+y+"-"+w+"-"+h;
                                           // alert("0: "+arr_cordinates_t[0]);
                                        }
                                           // alert(arr_cordinates_r.valueOf());
                                        top_x=uploadheight-Box_height;
					left_y=uploadwidth;
					direction="T";
				}
				//********** Placing the block on Top side untile total box's heoght exceeds the Out line right
                                //alert("Outline TOP: "+outline_top);
				//alert("Counted BOx TOP: "+counted_box_top);
                                if((outline_top >= counted_box_top && direction=="T" && use_outline_t==true)||(use_arr_t==true && direction=="T"))
				{//alert("use Arr: "+use_arr_t);
					if(!use_arr_t){
                                           // alert("Going Inside");
                                        $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                         //alert("X: "+top_x+" Y: "+left_y);
                                        x=top_x;
                                        y=left_y;
                                        w=Box_width;
                                        h=Box_height;
                                        arr_cordinates_t[arr_counter_t]=x+"-"+y+"-"+w+"-"+h;
                                        arr_counter_t++;

                                        // second cordinate for the next round
                                        /*arr_element_right=parseFloat(counted_box_top+Box_width);
                                        if(arr_element_right>outline_top)
                                          {
                                                x=top_x+Box_height;
                                                y=left_y;
                                                w=Box_width;
                                                h=Box_height;
                                                arr_cordinates_r[1]=x+"-"+y+"-"+w+"-"+h;
                                                //alert("1: "+arr_cordinates_l[1]);
                                                arr_counter_r++;
                                          }*/
                                        last_counted_box=counted_box_top+Box_width;
                                        if(last_counted_box>outline_top){
                                             x=top_x;
                                             y=left_y+Box_width;
                                             w=Box_width;
                                             h=Box_height;
                                             arr_cordinates_r[0]=x+"-"+y+"-"+w+"-"+h;
                                        }
                                    }
                                    else{
                                        //alert(i);
                                         //alert(box_placed_b+" : "+arr_cordinates_b[box_placed_b]);
                                           arr_length=arr_cordinates_t.length;

                                             //alert("box count: " +box_placed_t +"Arra length: " +arr_length);
                                             if(box_placed_t < arr_length)
                                                 {  //alert("current orig array: "+arr_cordinates_t[box_placed_t]);
                                                     //alert("Arr Cords: "+arr_cordinates_t.valueOf());
                                                    arr_x_y =arr_cordinates_t[box_placed_t].split("-");
                                                    // alert("X: "+arr_x_y[0]);
                                                    // alert("Y: "+arr_x_y[1]);
                                                    top_x=parseFloat(parseFloat(arr_x_y[0])-parseFloat(Box_height));
                                                    left_y=parseFloat(arr_x_y[1]);
                                                    width=parseFloat(arr_x_y[2]);
                                                    height=parseFloat(arr_x_y[3]);

                                                    //alert("width: "+width+" Box width: "+Box_width);

                                                    //If the box size is less then the size of array box height
                                                    //alert(arr_cordinates_t.valueOf());
                                                     if(width>Box_width)
                                                        {//alert("one");
                                                            //alert("If Changed Cordinates: "+arr_cordinates_t[box_placed_t]);
                                                            //alert(arr_cordinates_length_t+"="+box_placed_t);
                                                            //alert("top: "+top_x+" left: "+left_y);
                                                           $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                            //Array co-ordinates for the next round
                                                                x=top_x;
                                                                y=left_y;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_t[box_placed_second_t]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(box_placed_second_t+": "+arr_next_round_t[box_placed_second_t]);
                                                             box_placed_second_t++;

                                                           original_cords=arr_cordinates_t[box_placed_t].split("-");
                                                           original_cords_x=parseFloat(original_cords[0]);
                                                           original_cords_y=parseFloat(original_cords[1]);
                                                           original_cords_w=parseFloat(original_cords[2]);
                                                           original_cords_h=parseFloat(original_cords[3]);

                                                           x=original_cords_x;
                                                           y=original_cords_y+Box_width;
                                                           w=original_cords_w-Box_width;
                                                           h=Box_height;

                                                           arr_cordinates_t[box_placed_t]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert("If Changed Cordinates: "+arr_cordinates_t[box_placed_t]);
                                                           //alert("If Next Cordinates: "+arr_cordinates_t[box_placed_t]);
                                                        }
                                                        else if(width<Box_width)
                                                        {  
                                                            //alert("Two");
                                                            //alert(i);
                                                            //alert("Box width: "+Box_width);
                                                            //alert("Inside Else IF");
                                                           arr_cordinates_length_t=arr_cordinates_t.length-1;
                                                            //alert("Original of Changed Cordinates: "+arr_cordinates_t[box_placed_t]);
                                                            //At the place he box as it is.
                                                           // alert(box_placed_t);
                                                           // alert(arr_cordinates_length_t);
                                                           if(arr_cordinates_length_t==box_placed_t)
                                                           {
                                                               $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                                //alert("top: "+top_x+" left: "+left_y);
                                                                //Array co-ordinates for the next round
                                                                x=top_x;
                                                                y=left_y;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_t[box_placed_second_t]=x+"-"+y+"-"+w+"-"+h;
                                                                //alert(box_placed_second_t+": "+arr_next_round_t[box_placed_second_t]);
                                                                box_placed_second_t++;
                                                                use_arr_t=false;
                                                           }
                                                           else
                                                           {
                                                                curr_box_left_y=left_y+Box_width;
                                                                arr_next_box_width= arr_cordinates_t[box_placed_t+1].split("-");
                                                                next_box_left_y=arr_next_box_width[1];

                                                               // alert("Curr: "+curr_box_left_y+" Next: "+next_box_left_y);
                                                            
                                                            if(curr_box_left_y > next_box_left_y)
                                                                {// alert("Inside Else IF IF");
                                                               // alert(arr_emptybox_cordinates_t.length);
                                                                   if(arr_emptybox_cordinates_t.length > 0) {
                                                                   // alert("Current Arr Cords: "+arr_cordinates_t[box_placed_t]);
                                                                       arr_emptybox_cordinates_t[emptybox_counter_t]=arr_cordinates_t[box_placed_t];

                                                                       prev_empty_box=arr_emptybox_cordinates_t[emptybox_counter_t-1].split("-");
                                                                       prev_empty_box_x=parseFloat(prev_empty_box[0]);
                                                                       prev_empty_box_y=parseFloat(prev_empty_box[1]);
                                                                       prev_empty_box_w=parseFloat(prev_empty_box[2]);
                                                                       prev_empty_box_add_y=prev_empty_box_y+prev_empty_box_w;
                                                                      // alert("Arr Prev Empty: "+arr_emptybox_cordinates_t[emptybox_counter_t-1]);
                                                                      // alert(prev_empty_box_y);
                                                                      // alert(prev_empty_box_w);

                                                                       curr_empty_box=arr_emptybox_cordinates_t[emptybox_counter_t].split("-");
                                                                       curr_empty_box_x=parseFloat(curr_empty_box[0]);
                                                                       curr_empty_box_add_y=parseFloat(curr_empty_box[1]);
                                                                       curr_empty_box_w=parseFloat(curr_empty_box[2]);
                                                                       curr_empty_box_h=parseFloat(curr_empty_box[3]);
                                                                        //alert("Curr Empty: "+curr_empty_box_add_y+" Prev Empty: "+prev_empty_box_add_y);
                                                                       // alert("Curr Empty x: "+curr_empty_box_x+" Prev Empty x: "+prev_empty_box_x);
                                                                        if(prev_empty_box_add_y==curr_empty_box_add_y)
                                                                           {//if equal then merge two arrays
                                                                          // alert("both are consecutive");
                                                                               x=prev_empty_box_x;
                                                                               y=prev_empty_box_y;
                                                                               w=parseFloat(curr_empty_box_w+prev_empty_box_w);
                                                                               h=Math.max(prev_empty_box_h, curr_empty_box_h);
                                                                               arr_emptybox_cordinates_t[emptybox_counter_t-1]=x+"-"+y+"-"+w+"-"+h;
                                                                               arr_cordinates_t[box_placed_t]=x+"-"+y+"-"+w+"-"+h;
                                                                               //arr_emptybox_cordinates_t =[];
                                                                               //emptybox_counter_t= 0;
                                                                             // box_placed_t--;
                                                                           }
                                                                           else{
                                                                                  arr_emptybox_cordinates_t[emptybox_counter_t]=arr_cordinates_t[box_placed_t];
                                                                                  emptybox_counter_t++;
                                                                                   box_placed_t++;
                                                                                      //alert("After saving boxCounter1: "+box_placed_t);
                                                                                     // break;
                                                                              }
                                                                   }else{

                                                                   arr_emptybox_cordinates_t[emptybox_counter_t]=arr_cordinates_t[box_placed_t];
                                                                   emptybox_counter_t++;
                                                                   box_placed_t++;
                                                                   // alert("After saving boxCounter2: "+box_placed_t);
                                                                }
                                                               //alert("EmptyArray: "+arr_emptybox_cordinates_t.valueOf());
                                                                 i--;//to reapeat same box
                                                                //alert("OriginalArray: "+arr_cordinates_t.valueOf());
                                                                }
                                                            // box_placed_t++;
                                                           }
                                                        }
                                                        else
                                                       {//alert("Equal boxes");
                                                           //alert("three");
                                                           //  alert(box_placed_t);
                                                            $("#"+i).css({"top":top_x,"left":left_y,"float":"left"});
                                                            // alert("top: "+top_x+" left: "+left_y);
                                                             //Array co-ordinates for the next round
                                                                x=top_x;
                                                                y=left_y;
                                                                w=Box_width;
                                                                h=Box_height;
                                                                arr_next_round_t[box_placed_second_t]=x+"-"+y+"-"+w+"-"+h;
                                                           //alert(box_placed_second_t+": "+arr_next_round_t[box_placed_second_t]);
                                                           box_placed_second_t++;

                                                             x=top_x+Box_height;
                                                             y=left_y;
                                                             w=Box_width;
                                                             h=Box_height;
                                                            // arr_cordinates_t[box_placed_t+1]=x+"-"+y+"-"+w+"-"+h;
                                                            arr_cordinates_length_t=arr_cordinates_t.length-1;
                                                            if(arr_cordinates_length_t==box_placed_t)
                                                           {    //alert("three4");
                                                                use_arr_t=false;
                                                           }
                                                           else{
                                                             box_placed_t++;
                                                           }
                                                        }
                                                        

                                                 }
                                    }

                                       
				}
				else if(direction=="T")
				{
                                        use_arr_t=true;
                                        use_outline_t=false;
                                        //alert(arr_cordinates_t.length);
                                        //alert(arr_cordinates_t.valueOf());
                                        //arr_cordinates_t=arr_next_bound_t;
                                       

                                        if(arr_next_round_t.length!=0)
                                        {
                                        arr_cordinates_t=arr_next_round_t;
                                           //Get the starting box cordinates for bottom box placement
                                          //alert(arr_cordinates_t.valueOf());
                                           length_arr=arr_cordinates_t.length;
                                       start_cords_for_next_rnd= arr_cordinates_t[length_arr-1].split("-")
                                            x=parseFloat(start_cords_for_next_rnd[0]);
                                            y=parseFloat(parseFloat(start_cords_for_next_rnd[1])+parseFloat(start_cords_for_next_rnd[2]));
                                            w=parseFloat(start_cords_for_next_rnd[2]);
                                            h=parseFloat(start_cords_for_next_rnd[3]);
                                            arr_next_round_r[0]=x+"-"+y+"-"+w+"-"+h;
                                           // alert("B0: "+arr_cordinates_t[length_arr-1]);
                                          
                                          arr_cordinates_r=arr_next_round_r.slice(0,arr_next_round_r.length-1);
                                         // alert("UPDATED ARRAR Rajendhar: "+arr_cordinates_r.valueOf());
                                        }
                                       // alert(arr_cordinates_r.valueOf());
                                       // alert(arr_cordinates_b.valueOf());
                                       // alert(arr_cordinates_l.valueOf());
                                       // alert(arr_cordinates_t.valueOf());
                                        //top_x=uploadheight+outline_left-Box_height;
					//left_y=uploadwidth-Box_width;
					direction="";
                                         //arr_next_round_r="";
                                         //arr_emptybox_cordinates_r="";
                                         
                                         //arr_next_round_b="";
                                         //arr_emptybox_cordinates_b="";
                                         
                                         //arr_next_round_l="";
                                         //arr_emptybox_cordinates_l="";
                                         
                                         //arr_next_round_t="";
                                         //arr_emptybox_cordinates_t="";
                                        
                                       i--;
                                        outline_right = outline_right+max_width;
                                        outline_left = outline_left+max_width;
                                        outline_bottom = outline_bottom+max_width;
                                        outline_top =outline_top+max_width;//increasing outline_top seearch box width plus the first box in this direction
				}

				 //********** Counting of the boxeces******************************
                                if(direction=="R")
				{
                                    counted_box_right=counted_box_right+Box_height;
                                      //alert(" Counted Box right Bottom: "+counted_box_right);
				}
				if(direction=="B")
				{
                                    counted_box_bottom=counted_box_bottom+Box_width;
                                    //alert(counted_box_bottom);
				}
				if(direction=="L")
				{
                                    counted_box_left=counted_box_left+Box_height;
				}
				if(direction=="T")
				{
                                    counted_box_top=counted_box_top+Box_width;
				}


			}
});