class Piece < ApplicationRecord
  belongs_to :sample

	scope :rejected, -> { where(status: false) }
  scope :accepted, -> { where(status: true) }
  
	validates :serie, presence: true
  validates :cmac, presence: true
  validates :emac, presence: true
end
