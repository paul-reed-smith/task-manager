admin = Admin.find_or_create_by(first_name: 'admin', last_name: 'admin', email: 'admin@localhost.com')
admin.password = 'admin'
admin.save

60.times do |i|
  u = [Developer, Manager].sample.new
  if u.type == 'Developer'
    u.email = "dev#{i}@mail.gen"
    u.first_name = "developer#{i}"
    u.last_name = "ldeveloper#{i}"
  else
    u.email = "man#{i}@mail.gen"
    u.first_name = "manager#{i}"
    u.last_name = "lmanager#{i}"
  end
  u.password = i.to_s
  u.save
end

states = ['new_task', 'in_development', 'in_qa', 'in_code_review', 'ready_for_release', 'released', 'archived']

60.times do |i|
  t = Task.new
  t.name = "name#{i}"
  t.description = "description#{i}"
  t.author_id = i
  t.state = states.sample
  t.save
end
