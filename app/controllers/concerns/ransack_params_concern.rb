module RansackParamsConcern
  RANSACK_DEFAULT_SORT = 'id desc'.freeze

  def ransack_params(permitted_keys = nil)
    ransack = if permitted_keys.present?
                params.permit(q: permitted_keys).fetch(:q, {})
              else
                params.to_unsafe_h.fetch(:q, {})
              end
    ransack[:s] ||= self.class::RANSACK_DEFAULT_SORT
    ransack
  end
end
