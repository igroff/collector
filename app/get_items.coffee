#! /usr/bin/env ./node_modules/.bin/coffee
# vi:ft=coffee
getSomethingForCurrentTime = ->
  now = new Date()
  minutesSinceMidnight = (now.getHours() * 60) + now.getMinutes()
  numRanges = timeRanges.length
  myIndex = null
  for v,i in timeRanges
    break unless minutesSinceMidnight > v
    myIndex = i
  
  thingsAvailableAtTime[myIndex]()

getRandomRarity = ->
  rnd = Math.floor(Math.random() * 100)
  rarity = "common"
  if (0 <= rnd < 77)
    rarity = "common"
  else if (76 < rnd < 91)
    rarity = "uncommon"
  else if (90 < rnd < 96)
    rarity = "rare"
  else if (95 < rnd <= 98)
    rarity = "ultraRare"
  else if (rnd is 99)
    rarity = "elite"
  rarity

getSomethingStraightUp = ->
  rarity = getRandomRarity()
  set = collections.normal[rarity]
  index = Math.floor(Math.random() * (1 + set.length))
  item:set[index], type:rarity

if window
  window.getSomethingStraightUp = getSomethingStraightUp
if typeof(windows) is "undefined"
  console.log getSomethingStraightUp()
