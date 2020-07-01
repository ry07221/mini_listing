class Product < ApplicationRecord
  has_many :images

  accepts_nested_attributes_for :images, allow_destroy: true  # ← 親レコードが削除された際に関連付いている子レコードも一緒に削される
end
