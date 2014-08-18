class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :currency
  has_many :images
end
