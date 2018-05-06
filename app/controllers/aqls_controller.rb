class AqlsController < ApplicationController
  before_action :set_aql, only: [:show, :edit, :update, :destroy]

  # GET /aqls
  # GET /aqls.json
  def index
    @aqls = Aql.all
  end

  # GET /aqls/1
  # GET /aqls/1.json
  def show
  end

  # GET /aqls/new
  def new
    @aql = Aql.new
  end

  # GET /aqls/1/edit
  def edit
  end

  # POST /aqls
  # POST /aqls.json
  def create
    @aql = Aql.new(aql_params)

    respond_to do |format|
      if @aql.save
        format.html { redirect_to @aql, notice: 'Aql was successfully created.' }
        format.json { render :show, status: :created, location: @aql }
      else
        format.html { render :new }
        format.json { render json: @aql.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /aqls/1
  # PATCH/PUT /aqls/1.json
  def update
    respond_to do |format|
      if @aql.update(aql_params)
        format.html { redirect_to @aql, notice: 'Aql was successfully updated.' }
        format.json { render :show, status: :ok, location: @aql }
      else
        format.html { render :edit }
        format.json { render json: @aql.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /aqls/1
  # DELETE /aqls/1.json
  def destroy
    @aql.destroy
    respond_to do |format|
      format.html { redirect_to aqls_url, notice: 'Aql was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aql
      @aql = Aql.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def aql_params
      params.require(:aql).permit(:letter_code, :aql, :batch_size, :fisrt_sample, :first_rejection, :second_Sample, :second_rejection)
    end
end
