class ChangeImagesColumns < ActiveRecord::Migration
  def change
    change_table :images do |t|
      t.rename :entityType, :imageable_type
      t.rename :entityId, :imageable_id
    end
  end
end
