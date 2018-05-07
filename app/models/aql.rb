class Aql < ApplicationRecord
	has_many 	:samples
	
	def aql_lot
		"#{aql} -->  #{lot}"
	end
end
