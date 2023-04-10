<table align="left" border="1">
   <tbody>
      <?php
      $size = $_POST["size"];

      //for($i = 1; $i <= $size; $i++) {
        //echo "<tr>";
         //for($j = 1; j <= $size; $j++) {
            //$result = ($i * $j)
            //echo "<td>$result</td>";
      //   echo "</tr>"
        //}
      //}
      for ($i = 1; $i <= ($size + 1); $i++) {
         echo "<tr>";
            for ($j = 1; $j <= ($size + 1); $j++) {
               if (($i == 1) and ($j == 1)) {
                  echo "<td></td>";
               }
               else if ($i == 1) {
                  $k = $j - 1;
                  echo "<td>$k</td>";
               }
               else if ($j == 1) {
                  $k = $i - 1;
                  echo "<td>$k</td>";
               }
               else {
                  $result = ($i - 1) * ($j - 1);
                  echo "<td>$result</td>";
               }
            }
         echo "</tr>";
      }
      ?>
   </tbody>
</table>
