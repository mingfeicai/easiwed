class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :challenge, :answer
  has_one :category
  has_one :company
  has_many :tags
end
