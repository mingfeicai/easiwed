class Trip < ActiveRecord::Base
  belongs_to :tour
  belongs_to :tourist
end
