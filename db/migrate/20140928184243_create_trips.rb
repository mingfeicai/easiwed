class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.datetime :scheduled
      t.references :tour, index: true
      t.references :tourist, index: true
      t.string :status

      t.timestamps
    end
  end
end
