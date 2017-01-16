Rails.application.routes.draw do
  get 'home', to: 'home#index'
  post 'login', to: 'sessions#create'
  post 'logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
