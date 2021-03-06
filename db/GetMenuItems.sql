USE [PizzaJunctionOrders]
GO
/****** Object:  StoredProcedure [dbo].[GetMenuItems]    Script Date: 7/7/2017 5:12:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Gurpreet Singh
-- Create date: 03/July/2017
-- Description:	Gets all the menu items
-- =============================================
ALTER PROCEDURE [dbo].[GetMenuItems]
	@itemTypeId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT		mi.[MenuItemId],
                mi.[ItemId],
                i.[ItemTitle],
                i.[ItemDescription],
                ip.ItemPrice,
                ItemSize.Size,
                ItemSize.MetricType,
                ItemSize.[Description]
			FROM [dbo].[Item] i JOIN 
			[dbo].[MenuItems] mi ON mi.ItemId = i.ItemId
			LEFT JOIN [dbo].[SpecialityPrice] sp ON sp.SpecialityPriceId = mi.SpecialityPriceId
			LEFT JOIN [dbo].[ItemPrice] ip ON ip.ItemPriceId = sp.ItemPriceId
			LEFT JOIN [dbo].[ItemSize] ItemSize ON  ItemSize.ItemSizeId = sp.ItemSizeId
			WHERE i.ItemTypeId = 1--@itemTypeId --Hardcoded to 1 for now
			ORDER BY [ItemId], mi.[SpecialityPriceId]

END
