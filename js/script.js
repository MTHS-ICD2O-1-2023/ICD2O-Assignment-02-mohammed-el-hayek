// Copyright (c) 2024 Mohammed El-hayek All rights reserved
//
// Created by: Mohammed El-hayek
// Created on: Mar 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate () {
  // input
  const H = parseInt(document.getElementById('H of parallelogram').value)
  const B = parseInt(document.getElementById('B of parallelogram').value)

  // process
  const area = H * B

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
