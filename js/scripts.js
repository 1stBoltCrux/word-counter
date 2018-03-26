function onlyUnique(word, index, self) {
    return self.indexOf(word) === index;
}
$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();
    var sentence = $("#text").val();
    var words = sentence.split(" ");
    words.sort();
    console.log(words);
    var counts = [];
    var prev;

    words.forEach(function(word) {
      if (word !== prev) {
        counts.push(1);
      }else {
        counts[counts.length-1]++;
      }
      prev = word;
    });
    console.log(counts);
    var uniqueWords = words.filter(onlyUnique);
    console.log(uniqueWords);
    var wordCount= []
    uniqueWords.forEach(function(word, index) {
      wordCount.push(word + ": " + counts[index]);
    });
    console.log(wordCount);
    wordCount.forEach(function(count) {
      $("#words").append("<li>" + count + "</li>");
    });





  });
});
