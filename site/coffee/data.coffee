#! /usr/bin/env ./node_modules/.bin/coffee
# vi:ft=coffee

collections=
normal:
  elite:     (x for x in [401..475])
  ultraRare: (x for x in [301..375])
  rare:      (x for x in [1..75])
  uncommon:  (x for x in [101..250])
  common:    (x for x in [501..750])
collections.timeBased=
  elite:     (x for x in [837..840])
  ultraRare: (x for x in [831..836])
  rare:      (x for x in [821..830])
  uncommon:  (x for x in [801..820])
  common:    (x for x in [751..800])
collections.geographyBased=
  elite:     (x for x in [897..900])
  ultraRare: (x for x in [891..896])
  rare:      (x for x in [881..890])
  uncommon:  (x for x in [871..880])
  common:    (x for x in [840..870])

timeRanges = [
  0     # Midnight
  60    # 1 AM
  180   # 3 AM
  420   # 7 AM
  720   # Noon
  1200  # 8 PM
  1320  # 10 PM
  1380  # 11 PM
  1425  # 11:45 PM
  1438  # 11:58 PM
]

thingsAvailableAtTime = [
  () -> 1  # Midnight
  () -> 2  # 1 AM
  () -> 3  # 3 AM
  () -> 4  # 7 AM
  () -> 5  # Noon
  () -> 6  # 8 PM
  () -> 7  # 10 PM
  () -> 8  # 11 PM
  () -> 9  # 11:45 PM
  () -> 10 # 11:58 PM
]
  
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
