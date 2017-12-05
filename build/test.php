<?php
	// Меню - http://dev.1c-bitrix.ru/user_help/settings/settings/components_2/navigation/menu.php
	$APPLICATION->IncludeComponent(
		"bitrix:menu",
		".default",                  // [bottom_menu, catalog_native, top_menu, .default, blue_tabs, catalog_horizontal, catalog_vertical, grey_tabs, horizontal_multilevel, tree, vertical_multilevel]
		array(        
			// region Основные параметры         
			"ROOT_MENU_TYPE"         =>  "left",  // Тип меню для первого уровня : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )         
			// endregion         
			// region Настройки кеширования         
			"MENU_CACHE_TYPE"        =>  "N",     // Тип кеширования : array ( 'A' => 'Авто', 'Y' => 'Кешировать', 'N' => 'Не кешировать', )         
			"MENU_CACHE_TIME"        =>  "3600",  // Время кеширования (сек.)          
			"MENU_CACHE_USE_GROUPS"  =>  "Y",     // Учитывать права доступа          
			"MENU_CACHE_GET_VARS"    =>  "",      // Значимые переменные запроса
			// endregion         
			// region Дополнительные настройки         
			"MAX_LEVEL"              =>  "1",     // Уровень вложенности меню : array ( 1 => '1', 2 => '2', 3 => '3', 4 => '4', )         
			"CHILD_MENU_TYPE"        =>  "left",  // Тип меню для остальных уровней : array ( 'left' => 'Левое меню', 'top' => 'Верхнее меню', 'bottom' => 'Нижнее меню', )         
			"USE_EXT"                =>  "N",     // Подключать файлы с именами вида .тип_меню.menu_ext.php          
			"DELAY"                  =>  "N",     // Откладывать выполнение шаблона меню          
			"ALLOW_MULTI_SELECT"     =>  "N",     // Разрешить несколько активных пунктов одновременно          
			// endregion 
		)
	);

	$APPLICATION->IncludeComponent(

	)