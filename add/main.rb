def add(param_1, param_2)
  param_1 + params_2
end

def result_add(*args)
  acc = 0
  args.each do |el|
    acc += el;
  end
  acc
end

puts result_add(1,2,3,4,5)