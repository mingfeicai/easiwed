class Problem < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
end
