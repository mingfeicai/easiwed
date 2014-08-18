class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :country
      t.string :currency

      t.timestamps
    end
  end
end
