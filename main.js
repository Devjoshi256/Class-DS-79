Student_array=[];

function submit(){
    var name_1=document.getElementById("student_1").value;
     var name_2=document.getElementById("student_2").value;
     var name_3=document.getElementById("student_3").value;
     var name_4=document.getElementById("student_4").value;
    
   Student_array.push(name_1);
    Student_array.push(name_2);
    Student_array.push(name_3);
    Student_array.push(name_4);
    
    console.log(Student_array);
    
    document.getElementById("display_name").innerHTML=Student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block"
}

function sorting(){
    Student_array.sort();
    console.log(Student_array);
    document.getElementById("display_name").innerHTML=Student_array;
}
