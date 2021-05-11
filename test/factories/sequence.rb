FactoryBot.define do
  sequence :string, aliases: [:first_name, :last_name, :password, :name, :state] do |n|
    "string#{n}"
  end

  sequence :text, aliases: [:description] do |n|
    "text#{n}"
  end

  sequence :email do |n|
    "person#{n}@example.com"
  end

  sequence :avatar do |n|
    "path_to_avatar/avatar#{n}"
  end

  sequence :expired_at do
    (Time.now + 30.days).to_date
  end
end
