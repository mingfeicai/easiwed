class CreateTourists < ActiveRecord::Migration
  def change
    create_table :tourists do |t|
      t.string :name
      t.integer :partySize

      t.timestamps
    end
  end
end
