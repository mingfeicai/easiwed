class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :body
end
