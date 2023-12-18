def absolute_value(a)
  # the objective is to return the median for the array
  # to know if the array has an even length
  is_even = a.length % 2 == 0

  return is_even ? a[a.length / 2 - 1] : a[a.length / 2]
end

puts absolute_value([2, 4, 7])
puts absolute_value([2, 4, 7, 6])
puts absolute_value([2, 4, 7, 6, 6])
puts absolute_value([2, 4, 7, 6, 6, 8])