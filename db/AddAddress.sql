
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 13/July/2017
-- Description:	
-- =============================================
CREATE PROCEDURE AddAddress 
	-- Add the parameters for the stored procedure here
	@street nvarchar(25), 
	@appartment nvarchar(25),
    @city nvarchar(25),
    @stateId int,
    @zip nvarchar(20)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @street, @appartment
END
GO
