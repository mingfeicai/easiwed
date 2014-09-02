class Problem < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
  has_and_belongs_to_many :tags
end
