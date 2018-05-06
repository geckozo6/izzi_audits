class Sample < ApplicationRecord
  belongs_to :aql
  belongs_to :equipment
  belongs_to :auditor

	has_many	 :pieces, dependent: :destroy, :counter_cache => true

	#validates :sampledate, format: { with: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,  message: "Inserta un formato de fecha valido"	}

end
