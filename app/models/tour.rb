class Tour < ActiveRecord::Base
  belongs_to :guide
  belongs_to :place
end
