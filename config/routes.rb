Rails.application.routes.draw do
  resources :pieces
  resources :samples
  resources :aqls
  resources :equipment
  resources :auditors
	root			'samples#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
