ESX = nil
local zycko = 0
local jedzenie = 0
local picie = 0

Citizen.CreateThread(function()
	if ESX == nil then
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
	end
end)

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(10)

		TriggerEvent('esx_status:getStatus', 'hunger', function(status)
			jedzenie = status.val/1000000*100
		end)
		TriggerEvent('esx_status:getStatus', 'thirst', function(status)
			picie = status.val/1000000*100
		end)

		zycko = GetEntityHealth(GetPlayerPed(-1))

		print(zycko)
		SendNUIMessage({
			typ = "zmiany",
			zycie = zycko,
			jedzenie = jedzenie,
			picie = picie
		})

		if IsPedInAnyVehicle(GetPlayerPed(-1), false) then
			SendNUIMessage({
				typ = "hud",
				status = 2
			})
			Wait(1000)
			DisplayRadar(true)
		else
			Wait(500)
			DisplayRadar(false)
			SendNUIMessage({
				typ = "hud",
				status = 1
			})
		end
	end
end)