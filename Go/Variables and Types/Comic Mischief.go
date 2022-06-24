package main

import f "fmt"

func main() {
  var publisher, writer, artist, title string
  var year, pageNumber uint
  var grade float32
  title = "Mr. GoToSleep"
  writer = "Tracey Hatchet"
  artist = "Jewel Tampson"
  publisher = "DizzyBooks Publishing Inc."
  year = 1997
  pageNumber = 14
  grade = 6.5

  f.Println(title, "written by", writer, "drawn by", artist, "in", year, "Length", pageNumber, "given a grade of", grade, "published by", publisher)

  title = "Epic Vol. 1"
  writer = "Ryan N. Shawn"
  artist = "Phoebe Paperclips"
  year = 2013
  pageNumber = 160
  grade = 9.0


  f.Println(title, "written by", writer, "drawn by", artist, "in", year, "Length", pageNumber, "given a grade of", grade, "published by", publisher)

}