
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 13/July/2017
-- Description:	
-- =============================================
CREATE PROCEDURE GetAddresses 
	-- Add the parameters for the stored procedure here
	@addressId int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @addressId
END
GO
