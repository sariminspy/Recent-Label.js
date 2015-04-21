//<![CDATA[
      //Character count script
      function countit(what){
        formcontent=what.form.charcount.value
        what.form.displaycount.value=formcontent.length
      }
      //Meta tag generator
      <!-- hide the script
      function create(form) {
        if (confirm("Are you sure?")) {
          form.story.value = "Copy the codes below and insert them " +
            "just below Google and Yahoo verification codes below <head> Tag.\n\n";
          if (form.input1.value != "") {
            form.story.value +="<b:if cond='data:blog.url == data:blog.homepageUrl'>\n<META NAME=\"Description\" CONTENT=\"" +
              form.input1.value + "\" />\n</b:if>\n";
          }
          if (form.input2.value != "") {
            form.story.value +="<META NAME=\"Keywords\" CONTENT=\"" +
              form.input2.value + "\" />\n";
          }
          if (form.input3.value != "") {
            form.story.value +="<META NAME=\"Author\" CONTENT=\"" +
              form.input3.value + "\" />\n";
          }
          if (form.input4.value != "") {
            form.story.value +="<META NAME=\"Robots\" CONTENT=\"" +
              form.input4.options[form.input4.selectedIndex].value + "\" />\n";
          }
        }
      }
      function about() {
        msg=open("about.html","DisplayWindow","toolbar=no,width=280,height=420,directories=no,status=no,scrollbars=yes,resize=no,menubar=no");
      }
      // end hiding contents from old browsers  -->
      //]]>