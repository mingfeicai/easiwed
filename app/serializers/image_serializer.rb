class ImageSerializer < ActiveModel::Serializer
  attributes :id, :small, :medium, :large, :distribution
end
