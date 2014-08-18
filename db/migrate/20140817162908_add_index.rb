class AddIndex < ActiveRecord::Migration
  def change
    add_index :images, [:entityType, :entityId], :unique => true
  end
end
