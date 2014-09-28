class AddPlaceToTours < ActiveRecord::Migration
  def change
    add_column :tours, :place_id, :integer
    add_index :tours, :place_id
  end
end
